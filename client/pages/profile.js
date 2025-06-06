import Header from "@/components/Header"
import withAuth from "@/components/WithAuth"

function ProfilePage({user}){
    return (
        <>
            <Header />
            profile
        </>
    )
}

export default withAuth(ProfilePage);