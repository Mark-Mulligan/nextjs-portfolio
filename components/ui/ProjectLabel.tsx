import Image from 'next/image';
import styles from '../../styles/ProjectLabel.module.scss';
import { useEffect, useState, useRef } from 'react';

interface ProjectLabelProps {
  title: string;
  subTitle: string;
  btnText: string;
  projectLink: string;
}

const ProjectLabel = ({ title, subTitle, btnText, projectLink }: ProjectLabelProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<null | HTMLAnchorElement>(null);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  useEffect(
    () => {
      const node = ref.current;

      if (node && node !== null) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [], // Recall only if ref changes
  );

  return (
    <div className={styles.projectInfoContainer}>
      <div className={styles.projectInfo}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <a ref={ref} href={projectLink}>
          <span>{btnText}</span>
          <span className={styles.linkArrow}>
            <Image
              src={isHovering ? '/icons/right-arrow.png' : '/icons/white-right-arrow.png'}
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
