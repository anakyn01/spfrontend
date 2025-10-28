import {useState} from "react";//리액트 전체 라이브러리에서 상태관리 위해서 useState
import axios from "axios";
import { Container, Row, Col, Button, 
    Form, Card } from "react-bootstrap";

const Member = () => {//리액트로 회원가입 컴포넌트
 /*1)상태 관리
 useState 는 React의 훅으로 컴포넌트 내부에서 상태를 관리하게 해줍니다
 formData는 현재 입력폼의 모든 값을 객체로 가지고 있고
 setFormData는 이값을 변경할때 사용하는 함수
 처음에는 모든 입력 필드가 빈문자열 입니다
 */
 const [formData, setFormData] = useState({
firstName:"",
lastName:"",
email:"",
password:"",
repeatPassword:"",
companyName:"",
position:"",
tell:"",
address:"",
 })

//2) 입력값 변경 핸들러
/*
e.target은 현재 이벤트가 발생한 input요소를 가르킵니다
e.target.name input에 네임속성이고
e.target.value 사용자가 입력한값
그래서 
[e.target.name]: e.target.value는
객체의 키를 동적으로 업데이트 하는 문법입니다
*/
const handleChange = (e) => {
    setFormData({
...formData, //기존데이터를 유지 변경하는 것만 덮어쓰기
[e.target.name]: e.target.value,
    });
}

//3)폼제출 핸들러
const handleSubmit = async (e) =>{
    e.preventDefault(); //페이지 새로고침 방지 기본적으로 form을 제출하면 페이지가 새로고침 됩니다 React에서는 이걸 js코드로 제어하기 위해 preventDefault()

    //패스워드가 일치하지 않을때
    if(formData.password !== formData.repeatPassword){
        alert("아저씨 이게 무슨 사항이에요!!");
        return;
    } try {
        await axios.post("http://localhost:8383/api/members", formData);
        alert("회원가입이 완료 되었습니다");
        window.location.href="http://localhost:3000/login";
    } catch (err) {
        console.error(err);
        alert("회원가입중 오류가 발생 했습니다");
    }
};

  

return(
    <>
    <Container>
        <Card className="o-hidden border-0 shadow-lg my-5">
            <Card.Body className="p-0">
                <Row>
                    <div className="col-lg-5 d-none d-lg-block bg-register-image">
                    </div>
                    <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>

<Form className="user" onSubmit={handleSubmit}>
{/*onSubmit form태그에 사용되는 이벤트 핸들러 사용자가 폼을 제출(submit)하기전에 발생하는 
이벤트를 처리하기 위해 사용
이는 form데이터가 서버로 전송되기 전에 유효성 검사 같은 추가적인 작업을 수행할수 있게 해줍니다
*/}
<div className="form-group row mb-2">
    <Col sm={6} className="mb-3 mb-sm-0">
        <Form.Control type="text" 
        className="form-control-user"
        placeholder="이름"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        />
    </Col>{/* 사용자가 input, select, textarea와 같은 폼요소의 값을 변경하고 포커스를 잃엇을때 발생하는 이벤트  */}

    <Col sm={6}>
        <Form.Control type="text" 
        className="form-control-user"
        placeholder="성"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        />
    </Col>
</div>

<div className="form-group mb-2">
    <Form.Control type="email" 
    className="form-control-user"
    placeholder="이메일"
    name="email"
    value={formData.email}
    onChange={handleChange}
    />
</div>

<div className="form-group row mb-2">
    <Col sm={6} className="mb-3 mb-sm-0">
    <Form.Control type="password" 
        className="form-control-user" 
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        />
    </Col>
    <Col sm={6}>
    <Form.Control type="password" 
        className="form-control-user" 
        placeholder="repeat password"
        name="repeatPassword"
        value={formData.repeatPassword}
        onChange={handleChange}
        />
    </Col>
</div>
<a href="/login" className="btn btn-primary btn-user btn-block mb-2">
Register Account
</a>
<hr/>
<a href="/" className="btn btn-google btn-user btn-block mb-2">
    <i className="fab fa-google fa-fw"></i>Register with Google
</a>

<a href="/" className="btn btn-facebook btn-user btn-block mb-2">
<i className="fab fa-facebook-f fa-fw"></i>Register with Facebook
</a>
</Form>
<hr/>
<div className="text-center mb-2">
   <a href="" className="small">Forgot Password ?</a>
</div>
<div className="text-center">
   <a href="" className="small">Already have ab account? Login!</a>
</div>
                    </div>
                    </div>
                </Row>
            </Card.Body>
        </Card>
    </Container>
    </>
)
}

export default Member;
