var commentList = {
			props:['todo'],
			methods:{
				removeme(id){
					this.$emit('del',id);
				}
			},
			template:`
			<div class="clist">							
				<commentItem v-for='c in todo' :comment='c' 
				:key='c.id'
				@del='removeme' >			
				</commentItem>
			</div>
			`									
}	
var commentItem = {
			props:['comment'],
			methods:{
				dodel(){
					this.$emit('del',this.comment.id);
				}
			},
			template:`
			<div class="comment">
				<span class="comment-author">{{comment.author}}:</span>
				<span class="comment-content">{{comment.content}}</span>
				<a href @click.prevent='dodel' class='comment-delete'>删除</a>	
			</div>
			`
}
