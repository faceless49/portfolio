import s from './Work.module.scss';
import {Btn} from '../../ui/btn/Btn';
import {Title} from '../../ui/title/Title';
import {Project} from './Project/Project';
import todolistImg from './../../assets/image/todolist.jpg'
import sociallNetworkImg from './../../assets/image/social.jpg'
import quizImage from './../../assets/image/quiz.jpg'
import inviteBookImg from './../../assets/image/invite.jpeg'
import helyFlyImg from './../../assets/image/helyfly.jpg'
import blogImg from './../../assets/image/blog.jpg'

export const Works = () => {

  const quiz = {
    backgroundImage: `url(${quizImage})`,
  };
  const todolist = {
    backgroundImage: `url(${todolistImg})`,
  };
  const socialNetwork = {
    backgroundImage: `url(${sociallNetworkImg})`,
  };
  const helyfly = {
    backgroundImage: `url(${helyFlyImg})`,
  };
  const invitebook = {
    backgroundImage: `url(${inviteBookImg})`,
  };
  const miniBlog = {
    backgroundImage: `url(${blogImg})`,
  };


  return (
    <section className={s.work}>
      <div className={'container'}>
        <div className={s.work_wrapper}>
          <div className={s.work_inner}>
            <div className={s.work_column}>
              <Title value={'My portfolio'}/>
              <p className={s.work_descr}>
                A small gallery of recent projects.
                Visit <a className={s.link} href={'https://github.com/faceless49'}>my work</a> page.
              </p>
            </div>
            <Btn value={'See github!'}/>
          </div>
          <div className={s.magic_wall}>
            <div className={s.magic_wall_column}>
              <Project style={todolist} title="Todolist"
                       description={'Todolist with Material UI'}
                       href={'https://faceless49.github.io/todolist/'}/>
            </div>
            <div className={s.magic_wall_column}>
              <Project style={quiz} title="Quiz" description={'Learn JS Cards'}
                       href={'https://faceless49.github.io/cards/'}/>
            </div>
            <div className={s.magic_wall_column}>
              <Project style={socialNetwork} title="Social Network"
                       description={'Classic social network with classes'}
                       href={'https://faceless49.github.io/socialNetwork/'}/>
            </div>
            <div className={s.magic_wall_column}>
              <Project style={invitebook} title="Invitebook"
                       description={'Light invitebook for training'}
                       href={'https://faceless49.github.io/invitebook/'}/>
            </div>
            <div className={s.magic_wall_column}>
              <Project style={helyfly} title="HelyFly"
                       description={'Only Responsive Markup Project'}
                       href={'https://faceless49.github.io/helyfly/'}/>
            </div>
            <div className={s.magic_wall_column}>
              <Project style={miniBlog} title="Miniblog"
                       description={'Miniblog with MockAPI'}
                       href={'https://faceless49.github.io/mini-blog/'}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
