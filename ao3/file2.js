// 代码修改自Project Ao3rework
// AO3页面增强脚本 - 重定向和UI修改模块
const redirectLogger = {
    prefix: '[AO3重定向]',
    info(msg) {
        console.log(`${this.prefix} ℹ️ ${msg}`);
    },
    warn(msg) {
        console.warn(`${this.prefix} ⚠️ ${msg}`);
    },
    error(msg) {
        console.error(`${this.prefix} ❌ ${msg}`);
    },
    debug(msg, data = null) {
        if (data) {
            console.debug(`${this.prefix} 🔍 ${msg}`, data);
        } else {
            console.debug(`${this.prefix} 🔍 ${msg}`);
        }
    }
};

// 配置管理器
const config = {
    redirectUrl: 'https://nav.hyf9588.tech',
    translationUrl: 'https://fanyi.caiyunapp.com/ao3?utm_source=fangao3sg.andbru123.cc.ua',
    cookieExpireDays: 15,
    selectors: {
        loginButton: '#login-dropdown',
        inviteLinks: '.actions a[href="/invite_requests"]',
        searchNav: '.primary.navigation.actions .search'
    }
};

// Cookie 管理器
const redirectCookieManager = {
    get(name) {
        const nameEQ = name + '=';
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length);
            }
        }
        return null;
    },

    set(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
        redirectLogger.debug(`Cookie已设置: ${name}=${value}, 有效期${days}天`);
    },

    remove(name) {
        this.set(name, '', -1);
        redirectLogger.debug(`Cookie已删除: ${name}`);
    }
};

// UI修改管理器
const redirectUiManager = {
    hideElement(element, reason) {
        if (element) {
            element.style.display = 'none';
            redirectLogger.debug(`隐藏元素: ${reason}`);
            return true;
        }
        return false;
    },

    createTranslationLink() {
        return `<a href="${config.translationUrl}" class="dropdown-toggle" data-target="#" rel="noopener noreferrer">AO3翻译神器(一键翻译)</a>`;
    },

    addTranslationLink() {
        const searchNav = document.querySelector(config.selectors.searchNav);
        if (searchNav) {
            searchNav.insertAdjacentHTML('afterbegin', this.createTranslationLink());
            redirectLogger.info('已添加翻译链接');
            return true;
        }
        redirectLogger.warn('未找到导航栏，无法添加翻译链接');
        return false;
    },

    modifyUI() {
        try {
            let success = true;
            
            // 隐藏登录按钮
            const loginBtn = document.querySelector(config.selectors.loginButton);
            success &= this.hideElement(loginBtn, '登录按钮');

            // 隐藏邀请按钮
            const inviteLinks = document.querySelectorAll(config.selectors.inviteLinks);
            if (inviteLinks.length > 0) {
                inviteLinks.forEach(link => success &= this.hideElement(link, '邀请按钮'));
            }

            // 添加翻译链接
            success &= this.addTranslationLink();

            if (success) {
                redirectLogger.info('UI修改完成');
                return true;
            }
            redirectLogger.warn('部分UI修改未完成');
            return false;
        } catch (error) {
            redirectLogger.error('UI修改失败: ' + error.message);
            return false;
        }
    }
};

// 重定向管理器
const redirectManager = {
    buildRedirectUrl(currentPage) {
        const params = new URLSearchParams();
        params.append('previousPage', currentPage);
        return `${config.redirectUrl}?${params.toString()}`;
    },

    handleRedirect() {
        redirectLogger.info('检查重定向状态...');
        const visited = redirectCookieManager.get('visited');
        
        if (!visited) {
            redirectLogger.debug('首次访问，准备重定向');
            redirectCookieManager.set('visited', 'true', config.cookieExpireDays);
            
            const currentPage = window.location.href;
            const redirectUrl = this.buildRedirectUrl(currentPage);
            
            redirectLogger.info(`重定向到: ${redirectUrl}`);
            window.location.href = redirectUrl;
        } else {
            redirectLogger.debug('已存在访问记录，无需重定向');
        }
    },

    reset() {
        redirectLogger.info('重置重定向状态');
        redirectCookieManager.remove('visited');
    }
};

// 初始化函数
function initializeRedirect() {
    redirectLogger.info('开始初始化重定向模块...');
    
    // 处理重定向
    redirectManager.handleRedirect();
    
    // 等待页面完全加载
    if (document.readyState === 'complete') {
        redirectLogger.debug('页面已加载完成，立即执行UI修改');
        redirectUiManager.modifyUI();
    } else {
        redirectLogger.debug('等待页面加载完成...');
        window.addEventListener('load', () => {
            redirectLogger.info('页面加载完成，执行UI修改');
            redirectUiManager.modifyUI();
        });
    }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeRedirect);
} else {
    initializeRedirect();
}
