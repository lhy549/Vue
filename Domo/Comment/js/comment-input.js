var commentInput = {
		template:`<div class="cinput">
		<label>
			<span>用户名:</span>
			<input v-model="author"/>
		</label>
		<label>
			<span>评论内容:</span> 
			<textarea v-model="content"></textarea>
		</label>
		<button @click='doSave'>发布</button>
		</div>`,
		
		data(){
			return{
				author:'',
				content:''
			}
		},
		
		methods:{
			doSave(){
				
				if(!this.author){
					return alert("用户名不能为空！");
				}
				
				if(!this.content){
					return alert("内容不能为空！");
				}
				//把用户保存到localStorage里
				localStorage.setItem('vvv-authorname',this.author);
								
				//这个方法是用于子组件触发父组件
				
				this.$emit('save',{
					id:+new Date(),
					author:this.author,
					content:this.content
				});
				
				//清空输入框内容
				this.content = '';
				this.author='';
			}				
		},
		created(){
			const authorname = localStorage.getItem('vvv-authorname');
			
			if(authorname){
				this.author = authorname;
			}
		}
											
}	