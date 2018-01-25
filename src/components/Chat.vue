<template>
  <div id="chat">
  <ConversationContainer 
			v-for="id in convoIds"
			:conversation="conversations[id]"
	 		:id="id"
	 		:key="id"
    />
  </div>
</template>

<script>
// import Initialize from './Initialize.vue'
import ConversationContainer from './ConversationContainer.vue'
import { mapState } from 'vuex'
export default {
  name: 'chat',
	components: {
		// Initialize,
		ConversationContainer
	},
	computed: {
		...mapState({
			conversations: state => state.conversations.all,
			convoIds: state => state.conversations.allIds
		})
  },
  created () {
    this.$store.dispatch('users/get')
    this.$store.dispatch('conversations/get')
  }
}
</script>

