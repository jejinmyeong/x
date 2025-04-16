import styles from "./page.module.css";
import XLogo from 'public/x_logo.svg';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <XLogo className={styles.logo} />
      </div>
      <div className={styles.right}>
        <div>
          <div>
            <h1>지금 일어나고 있는 일</h1>
          </div>
          <div>
            <h2>지금 가입하세요.</h2>
          </div>
          <div>
            {/* <div>
              <button>Apple에서 가입하기</button>
            </div>
            <div>
              <div></div>
              <div>
                <div>
                  <span>또는</span>
                </div>
              </div>
              <div></div>
            </div> */}
            <Link className={styles.signup} href='/i/flow/signup'>계정 만들기</Link>
            {/* <div>
              가입하시려면 
              <Link href='#'><span>쿠키 사용</span></Link>
              을 포함해 
              <Link href='#'><span>이용약관</span></Link>
              과 
              <Link href='#'><span>개인정보 처리방침</span></Link>
              에 동의해야 합니다.
            </div> */}
            <div>
              <div>
                <h3>이미 트위터에 가입하셨나요?</h3>
              </div>
              <Link href='/i/flow/login'>
                <div className={styles.login}>
                  <span>로그인</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}