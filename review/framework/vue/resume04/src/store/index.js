import Vuex from 'vuex'
import Vue from 'vue'
// import Vue from 'vue'



Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了
export default new Vuex.Store({
	state: {
		selected: 'profile',    
     	resume: {
     		config:[
     			{ field: 'profile', icon: 'id' },
     			{ field: 'workHistory', icon: 'work' },
     			{ field: 'education', icon: 'book' },
     			{ field: 'projects', icon: 'heart' },
     			{ field: 'awards', icon: 'cup' },
     			{ field: 'contacts', icon: 'phone' },
          		{ field: 'others', icon: 'add' },
     		],
     		profile: {
     			name:'木子',
     			city:'武汉',
     			title:'前端工程师',
     			birthday:'1900-01-01'
     		},
     		experience: [
                {company: '鸡飞狗跳公司', jobDetail:`公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
                我的主要工作是:
                1.打杂。
                2.打杂。`//这里不能在用'',否则会报错。
            },
                {company: '狗急跳墙责任有限公司', content: '公司总部设在XXXX区，先后在北京、上海成立分公司。我的主要工作是打杂。'},
            ],
            educated: [
                {school: '加里敦大学', other: '本科'},
            ],
     		projects: [
                {name: 'project A', duration: '文字'},
                {name: 'project B', duration: '文字'},
            ],
            winning: [
               
            ],
        	others: [
                { school: "tinghua", degree: "本科", duration: "", other: "其它" }
            ],
     	}   
	},
	mutations: {
		switchTab(state, payload){
			state.selected=payload
		}
	}
})