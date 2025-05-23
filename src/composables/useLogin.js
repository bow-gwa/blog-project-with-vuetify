import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)
const login = async (email, password) => {
    error.value = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        console.log(res)
        return res
    } catch(err) {
        console.log(err.message)
        //console.log(err.value) He made a note that we should change this to the above
        error.value = "Incorrect login credentials"
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin