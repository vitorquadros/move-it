import styles from '../styles/components/Profile.module.css';

const Profile = () => (
  <div className={styles.profileContainer}>
    <img src="https://github.com/vitorquadros.png" alt="Profile" />
    <div>
      <strong>Vitor Quadros</strong>
      <p>
        <img src="icons/level.svg" alt="Level" />
        Level: 1

      </p>
    </div>
  </div>
);

export default Profile;
