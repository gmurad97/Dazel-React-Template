import SectionRow from "../components/common/SectionRow/SectionRow.jsx";
import SectionContent from "../components/common/SectionContent/SectionContent.jsx";
import BlockContent from "../components/common/BlockContent/BlockContent.jsx";
import AuthContent from "../components/common/AuthContent/AuthContent.jsx";
import LoginForm from "../components/LoginForm/LoginForm.jsx";

const LoginPage = () => {
    return (
        <SectionRow>
            <AuthContent>
                    <LoginForm />
            </AuthContent>
        </SectionRow>
    );
}

export default LoginPage;