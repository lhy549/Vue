import commentInput from './comment-input.js';
import commentList from './comment-list.js';

export default {
	template:`
	<div>
		<cinput @save='dosave' ></cinput>				
		<clist v-bind:todo='comments' @del='delme'></clist>
	</div>
	`,
	data:{
		comments:[]
	},
	methods:{
		updatelocal(){
			localStorage.setItem('vvv-comments',JSON.stringify(this.comments));
		},
		dosave:function(res){
			//console.log(res);
			this.comments.push(res);
			this.updatelocal();
		},
		delme:function(id){
			this.comments = this.comments.filter((c) => c.id != id );
			this.updatelocal();
		}				
	},
	components: {
		cinput: commentInput,
		clist: commentList
	},
	created() {
		const cs = localStorage.getItem('vvv-comments');
		if (cs) {
			this.comments = JSON.parse(cs);
		}
	}			
};	