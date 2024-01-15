import styles from '../page.module.css';
import type {Metadata} from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'main',
  };
}

export default function Home() {

  return (
    <main className={styles.main}>
      <div>
        Главная страница
      </div>
    </main>
  );
}
