import { projectAuth } from "@/firebase/config"
import { ref } from "vue"
import { useRouter } from "vue-router";

const router = useRouter();

const error = ref(null)

const logout = async () => {
    error.value = null

    try {
     await projectAuth.signOut();
     router.push({ name: "SignIn" });
    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useLogout = () => {
    return { error, logout}
}

export default useLogout