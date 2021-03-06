import { ref } from 'vue'
import { projectAuth, projectFirestore } from '../firebase/config'

const useCollection = (collection) => {
    
    const error =ref(null)
    
    // add document to firestore
    const addDoc = async (doc) => {
        error.value = null
        
        try {
            await projectFirestore.collection(collection).add(doc)
        } catch (error) {
            console.log(err.message)
            error.value = 'Could not send the message'
        }
    }
    return { error, addDoc}
}

export default useCollection