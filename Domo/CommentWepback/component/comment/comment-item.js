var commentItem = {
	props: ['comment'],
	methods: { 
		dodel(){
			this.$emit('del',this.comment.id);
		}
	},
	template:`
	<div class="comment">
		<span class="comment-author">{{comment.author}}:</span>
		<span class="comment-content">{{comment.content}}</span>
		<a href @click.prevent='dodel' class='comment-delete'>删除</a>	
	</div>`
};

export default commentItem;