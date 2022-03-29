import s from "./Work.module.scss";
import { Title } from "../../ui/title/Title";
import { Project } from "./Project/Project";
import todolistImg from "./../../assets/image/todolist.jpg";
import socialNetworkImg from "./../../assets/image/social.jpg";
import quizImage from "./../../assets/image/quiz.jpg";
import inviteBookImg from "./../../assets/image/invite.jpeg";
import helyFlyImg from "./../../assets/image/helyfly.jpg";
import portfolioImg from "./../../assets/image/portfolio.jpg";
import blogImg from "./../../assets/image/blog.jpg";
import formImg from "./../../assets/image/form.png";
import { Letter } from "../../ui/letter/Letter";
import React from "react";

export const Works = () => {
  const portfolioTitle = [
    "M",
    "y",
    "\u00A0",
    "p",
    "o",
    "r",
    "t",
    "f",
    "o",
    "l",
    "i",
    "o",
  ];

  const quiz = {
    backgroundImage: `url(${quizImage})`,
  };
  const form = {
    backgroundImage: `url(${formImg})`,
  };
  const todolist = {
    backgroundImage: `url(${todolistImg})`,
  };
  const socialNetwork = {
    backgroundImage: `url(${socialNetworkImg})`,
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
  const portfolio = {
    backgroundImage: `url(${portfolioImg})`,
  };

  return (
    <section className={s.work} id="work">
      <div className={"container"}>
        <div className={s.work_wrapper}>
          <div className={s.work_inner}>
            <div className={s.work_column}>
              <Title>
                {portfolioTitle.map((item, i) => (
                  <Letter key={i}>{item}</Letter>
                ))}
              </Title>
              <p className={s.work_descr}>
                A small gallery of recent projects. Visit{" "}
                <a
                  className={s.work_link}
                  href={"https://github.com/faceless49"}
                >
                  my workpage.
                </a>
              </p>
            </div>
            <a
              className={s.work_link__btn}
              href={"https://github.com/faceless49"}
            >
              See github!
            </a>
          </div>
          <div className={s.magic_wall}>
            <div className={s.magic_wall_column}>
              <Project
                style={todolist}
                title="Todolist"
                description={"Todolist with Material UI"}
                href={"https://faceless49.github.io/todolist/"}
              />
            </div>
            <div className={s.magic_wall_column}>
              <Project
                style={quiz}
                title="Quiz"
                description={"Learn JS Cards"}
                href={"https://faceless49.github.io/cards/"}
              />
            </div>
            <div className={s.magic_wall_column}>
              <Project
                style={socialNetwork}
                title="Social Network"
                description={"Classic social network with classes"}
                href={"https://faceless49.github.io/socialNetwork/"}
              />
            </div>
            <div className={s.magic_wall_column}>
              <Project
                style={invitebook}
                title="Invitebook"
                description={"Light invitebook for training"}
                href={"https://faceless49.github.io/invitebook/"}
              />
            </div>
            <div className={s.magic_wall_column}>
              <Project
                style={helyfly}
                title="HelyFly"
                description={"Only Responsive Markup Project"}
                href={"https://faceless49.github.io/helyfly/"}
              />
            </div>
            <div className={s.magic_wall_column}>
              <Project
                style={portfolio}
                title="Some Portfolio"
                description={
                  "With YMaps. Editable / validate: name, city. Reselect sort skills"
                }
                href={"https://faceless49.github.io/axet/"}
              />
            </div>
            <div className={s.magic_wall_column}>
              <Project
                style={miniBlog}
                title="Miniblog"
                description={"Miniblog with MockAPI"}
                href={"https://faceless49.github.io/mini-blog/"}
              />
            </div>
            <div className={s.magic_wall_column}>
              <Project
                style={form}
                title="Work with form"
                description={"Test task with form, router"}
                href={"https://faceless49.github.io/roxxo/"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
