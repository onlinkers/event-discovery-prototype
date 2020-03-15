import Vue from 'vue';
import VueToasted from 'vue-toasted';

Vue.use(VueToasted);

const options = {
    error: {
        type : 'error',
        position: 'top-center',
        duration: 30000,
        keepOnHover: true,
        theme: 'toasted-primary',
        iconPack: 'fontawesome',
        icon: 'exclamation-triangle',
        className: 'error-message'
    }
};

export default Vue.toasted.register('errorMessage',
    (payload) => {
		
        // if there is no message passed show default message
        if(! payload.message) {
    	    return "&nbsp;&nbsp;Error: something Went wrong!"
        }
		
        // if there is a message show it with the message
        return `&nbsp;&nbsp;${payload.message}`
    },
    options.error
)