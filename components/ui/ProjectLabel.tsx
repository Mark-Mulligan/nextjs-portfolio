import Image from 'next/image';
import styles from '../../styles/ProjectLabel.module.scss';
import { useState, useEffect, useRef } from 'react';

interface ProjectLabelProps {
  title: string;
  subTitle: string;
  btnText: string;
  projectLink: string;
}

const ProjectLabel = ({ title, subTitle, btnText, projectLink }: ProjectLabelProps) => {
  return (
    <div className={styles.projectInfoContainer}>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <a href={projectLink}>
          <span>{btnText}</span>
          <span className={styles.linkArrow}>
            <Image
              src="/icons/white-right-arrow.png"
              alt="link to project page in another tab"
              height={15}
              width={15}
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectLabel;
