import Vue from 'vue';
import VueToasted from 'vue-toasted';

Vue.use(VueToasted);

const options = {
    error: {
        type : 'error',
        position: 'top-center',
        duration: 1500,
        keepOnHover: true,
        theme: 'toasted-primary',
    }
};

Vue.toasted.register('errorMessage',
    (payload) => {
		
        // if there is no message passed show default message
        if(! payload.message) {
    	    return "Error: something Went wrong!"
        }
		
        // if there is a message show it with the message
        return payload.message
    },
    options.error
)