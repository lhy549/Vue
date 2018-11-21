import commentItem from './comment-item.js';

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

export default commentList;

