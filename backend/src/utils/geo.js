// get proxy flag according to its name
export function getFlag(name) {
    // flags from @KOP-XIAO: https://github.com/KOP-XIAO/QuantumultX/blob/master/Scripts/resource-parser.js
    const flags = {
        '🇦🇿': ['阿塞拜疆'],
        '🇦🇹': ['奥地利', '奧地利', 'Austria', '维也纳'],
        '🇦🇺': [
            'AU',
            'Australia',
            'Sydney',
            '澳大利亚',
            '澳洲',
            '墨尔本',
            '悉尼',
            '土澳',
            '京澳',
            '廣澳',
            '滬澳',
            '沪澳',
            '广澳',
        ],
        '🇧🇪': ['BE', '比利時', '比利时'],
        '🇧🇬': ['保加利亚', '保加利亞', 'Bulgaria'],
        '🇧🇭': ['BH', '巴林'],
        '🇧🇩': ['BD', '孟加拉'],
        '🇵🇰': ['巴基斯坦'],
        '🇰🇭': ['柬埔寨'],
        '🇺🇦': ['烏克蘭', '乌克兰'],
        '🇭🇷': ['克罗地亚', 'HR', '克羅地亞'],
        '🇨🇦': [
            'Canada',
            'CANADA',
            'CAN',
            'Waterloo',
            '加拿大',
            '蒙特利尔',
            '温哥华',
            '楓葉',
            '枫叶',
            '滑铁卢',
            '多伦多',
            'CA',
        ],
        '🇨🇭': ['瑞士', '苏黎世', 'Switzerland', 'Zurich'],
        '🇳🇬': ['尼日利亚', 'NG', '尼日利亞'],
        '🇨🇿': ['Czechia', '捷克'],
        '🇸🇰': ['斯洛伐克', 'SK'],
        '🇷🇸': ['RS', '塞尔维亚'],
        '🇲🇩': ['摩爾多瓦', 'MD', '摩尔多瓦'],
        '🇩🇪': [
            'DE',
            'German',
            'GERMAN',
            '德国',
            '德國',
            '法兰克福',
            '京德',
            '滬德',
            '廣德',
            '沪德',
            '广德',
            'Frankfurt',
        ],
        '🇩🇰': ['DK', 'DNK', '丹麦', '丹麥'],
        '🇪🇸': ['ES', '西班牙', 'Spain'],
        '🇪🇺': ['EU', '欧盟', '欧罗巴'],
        '🇫🇮': ['Finland', '芬兰', '芬蘭', '赫尔辛基'],
        '🇫🇷': ['FR', 'France', '法国', '法國', '巴黎'],
        '🇬🇧': [
            'UK',
            'GB',
            'England',
            'United Kingdom',
            '英国',
            '伦敦',
            '英',
            'London',
        ],
        '🇲🇴': ['MO', 'Macao', '澳门', '澳門', 'CTM'],
        '🇰🇿': ['哈萨克斯坦', '哈萨克'],
        '🇭🇺': ['匈牙利', 'Hungary'],
        '🇭🇰': [
            'HK',
            'Hongkong',
            'Hong Kong',
            'HongKong',
            'HONG KONG',
            '香港',
            '深港',
            '沪港',
            '呼港',
            'HKT',
            'HKBN',
            'HGC',
            'WTT',
            'CMI',
            '穗港',
            '京港',
            '港',
        ],
        '🇮🇩': ['Indonesia', '印尼', '印度尼西亚', '雅加达'],
        '🇮🇪': ['Ireland', 'IRELAND', '爱尔兰', '愛爾蘭', '都柏林'],
        '🇮🇱': ['Israel', '以色列'],
        '🇮🇳': ['India', 'IND', 'INDIA', '印度', '孟买', 'MFumbai'],
        '🇮🇸': ['IS', 'ISL', '冰岛', '冰島'],
        '🇰🇵': ['KP', '朝鲜'],
        '🇰🇷': [
            'KR',
            'Korea',
            'KOR',
            '韩国',
            '首尔',
            '韩',
            '韓',
            '春川',
            'Chuncheon',
            'Seoul',
        ],
        '🇱🇺': ['卢森堡'],
        '🇱🇻': ['Latvia', 'Latvija', '拉脱维亚'],
        '🇲🇽': ['MEX', 'MX', '墨西哥'],
        '🇲🇾': [
            'MY',
            'Malaysia',
            'MALAYSIA',
            '马来西亚',
            '大馬',
            '馬來西亞',
            '吉隆坡',
        ],
        '🇳🇱': ['NL', 'Netherlands', '荷兰', '荷蘭', '尼德蘭', '阿姆斯特丹'],
        '🇳🇵': ['尼泊尔'],
        '🇵🇭': ['PH', 'Philippines', '菲律宾', '菲律賓'],
        '🇵🇷': ['PR', '波多黎各'],
        '🇷🇴': ['RO', '罗马尼亚'],
        '🇷🇺': [
            'RU',
            'Russia',
            '俄罗斯',
            '俄国',
            '俄羅斯',
            '伯力',
            '莫斯科',
            '圣彼得堡',
            '西伯利亚',
            '新西伯利亚',
            '京俄',
            '杭俄',
            '廣俄',
            '滬俄',
            '广俄',
            '沪俄',
            'Moscow',
        ],
        '🇸🇦': ['沙特'],
        '🇸🇪': ['SE', 'Sweden', '瑞典'],
        '🇲🇹': ['马耳他'],
        '🇲🇦': ['MA', '摩洛哥'],
        '🇸🇬': [
            'SG',
            'Singapore',
            'SINGAPORE',
            '新加坡',
            '狮城',
            '沪新',
            '京新',
            '泉新',
            '穗新',
            '深新',
            '杭新',
            '广新',
            '廣新',
            '滬新',
        ],
        '🇹🇭': ['TH', 'Thailand', '泰国', '泰國', '曼谷'],
        '🇹🇷': ['TR', 'Turkey', '土耳其', '伊斯坦布尔'],
        '🇹🇼': [
            'TW',
            'Taiwan',
            'TAIWAN',
            '台湾',
            '台北',
            '台中',
            '新北',
            '彰化',
            'CHT',
            '台',
            'HINET',
            'Taipei',
        ],
        '🇺🇸': [
            'US',
            'USA',
            'America',
            'United States',
            '美国',
            '美',
            '京美',
            '波特兰',
            '达拉斯',
            '俄勒冈',
            '凤凰城',
            '费利蒙',
            '硅谷',
            '矽谷',
            '拉斯维加斯',
            '洛杉矶',
            '圣何塞',
            '圣克拉拉',
            '西雅图',
            '芝加哥',
            '沪美',
            '哥伦布',
            '纽约',
            'Los Angeles',
            'San Jose',
            'Sillicon Valley',
            'Michigan',
        ],
        '🇻🇳': ['VN', '越南', '胡志明市'],
        '🇻🇪': ['VE', '委内瑞拉'],
        '🇮🇹': ['Italy', 'IT', 'Nachash', '意大利', '米兰', '義大利'],
        '🇿🇦': ['South Africa', '南非'],
        '🇦🇪': ['United Arab Emirates', '阿联酋', '迪拜', 'AE'],
        '🇧🇷': ['BR', 'Brazil', '巴西', '圣保罗'],
        '🇯🇵': [
            'JP',
            'Japan',
            'JAPAN',
            '日本',
            '东京',
            '大阪',
            '埼玉',
            '沪日',
            '穗日',
            '川日',
            '中日',
            '泉日',
            '杭日',
            '深日',
            '辽日',
            '广日',
            '大坂',
            'Osaka',
            'Tokyo',
        ],
        '🇦🇷': ['AR', '阿根廷'],
        '🇳🇴': ['Norway', '挪威', 'NO'],
        '🇨🇳': [
            'CN',
            'China',
            '回国',
            '中国',
            '中國',
            '江苏',
            '北京',
            '上海',
            '广州',
            '深圳',
            '杭州',
            '徐州',
            '青岛',
            '宁波',
            '镇江',
            'back',
        ],
        '🇵🇱': ['PL', 'POL', '波兰', '波蘭'],
        '🇨🇱': ['智利'],
        '🇳🇿': ['新西蘭', '新西兰'],
        '🇬🇷': ['希腊', '希臘'],
        '🇪🇬': ['埃及'],
        '🇨🇾': ['CY', '塞浦路斯'],
        '🇨🇷': ['CR', '哥斯达黎加'],
        '🇸🇮': ['SI', '斯洛文尼亚'],
        '🇱🇹': ['LT', '立陶宛'],
        '🇵🇦': ['PA', '巴拿马'],
        '🇹🇳': ['TN', '突尼斯'],
        '🇮🇲': ['马恩岛', '馬恩島'],
        '🇧🇾': ['BY', '白俄', '白俄罗斯'],
        '🇵🇹': ['葡萄牙'],
        '🇰🇪': ['KE', '肯尼亚'],
        '🇰🇬': ['KG', '吉尔吉斯坦'],
        '🇯🇴': ['JO', '约旦'],
        '🇺🇾': ['UY', '乌拉圭'],
        '🇲🇳': ['蒙古'],
        '🇮🇷': ['IR', '伊朗'],
        '🇵🇪': ['秘鲁', '祕魯'],
        '🇨🇴': ['哥伦比亚'],
        '🇪🇪': ['爱沙尼亚'],
        '🇪🇨': ['EC', '厄瓜多尔'],
        '🇲🇰': ['马其顿', '馬其頓'],
        '🇧🇦': ['波黑共和国', '波黑'],
        '🇬🇪': ['格魯吉亞', '格鲁吉亚'],
        '🇦🇱': ['阿爾巴尼亞', '阿尔巴尼亚'],
        '🏳️‍🌈': ['流量', '时间', '应急', '过期', 'Bandwidth', 'expire'],
    };
    for (let k of Object.keys(flags)) {
        if (flags[k].some((item) => name.indexOf(item) !== -1)) {
            return k;
        }
    }
    // no flag found
    const oldFlag = (name.match(
        /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/,
    ) || [])[0];
    return oldFlag || '🏴‍☠️';
}
