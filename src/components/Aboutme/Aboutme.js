import profile_picture from '../../profile_pic.png';
import './Aboutme.css';

function Aboutme(props) {
    return (
        <section id='aboutme' className='aboutme-section'>
            <div className='aboutme-border'>
                <img className='profile_img' src={profile_picture}  />
                <div>
                    <div className='aboutme-header'>About me</div>
                    <div className='aboutme-content'>
                        <div>
                            My name is Thitithorn Kreingkraikumjorn. My nickname is Non.
                        </div>
                        <div>
                            I'm graduated from <a href="https://tu.ac.th/" target='_blank'>Thammasat University</a>, Liberty of Arts, Japanese section
                            which does not have any relation to programmer career.
                            But with my passion for programming, I learned some programming knowledge from the internet 
                            and I enroll in the programming class ( introduction to programming, operating system, database system, etc.) 
                            at the Department of Computer Science and the Department of Computer Engineering while I was in university.
                            I have basic knowledge of programming that makes me learn a new language fast and I am very excited to learn new things.
                        </div>
                        <div>
                            Currently, I'm the learner at <a href='https://thailand.generation.org/' target='_blank'>Generation Thailand</a>
                            , where I learn most of the web developer knowledge.
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
    );
}

export default Aboutme;