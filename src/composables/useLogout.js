// import { projectAuth } from "@/firebase/config"
// import { ref } from "vue"
// import { useRouter } from "vue-router";

// const router = useRouter();

// const error = ref(null)

// const logout = async () => {
//     error.value = null

//     try {
//      await projectAuth.signOut();
//      //router.push({ name: "SignIn" })
//      router.push({ path: "/" });
//     } catch(err) {
//         console.log(err.message)
//         error.value = err.message
//     }
// }

// const useLogout = () => {
//     return { error, logout }
// }

// export default useLogout

// the code below includes edits as guided by CP
import { projectAuth } from "@/firebase/config"
import { ref } from "vue"
import { useRouter } from "vue-router"

const useLogout = () => {
    const router = useRouter(); // Initialize router inside the function
    const error = ref(null);

    const logout = async () => {
        error.value = null;

        try {
            await projectAuth.signOut();
            router.push({ path: "/" }); // Navigate after successful logout
        } catch (err) {
            console.log(err.message);
            error.value = err.message;
        }
    };

    return { error, logout };
};

export default useLogout;
