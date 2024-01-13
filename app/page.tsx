import styles from './page.module.css';
import {Button, Htag, Ptag, Tag} from '@/app/components';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>

        <Button appearance={'primary'} arrow={'right'}>primary</Button>
        <Button appearance={'ghost'} arrow={'right'}>primary</Button>
        <Button appearance={'primary'} arrow={'down'}>primary</Button>
        <Button appearance={'primary'}>primary</Button>
        <Htag tag={'h1'}>aaaaassaaa</Htag>
        <Htag tag={'h2'}>aaaaassaaa</Htag>
        <Htag tag={'h3'}>aaaaassaaa</Htag>
        <Ptag size={'small'}>aaaaassaaa</Ptag>
        <Ptag>aaaaassaaa</Ptag>
        <Ptag size={'middle'}>aaaaassaaa</Ptag>
        <Ptag size={'large'}>aaaaassaaa</Ptag>
        <Tag isLink={true} href={"#"} color={'primary'} size={'small'}>aaaaassaaa</Tag>
        <Tag color={'ghost'} size={'small'}>aaaaassaaa</Tag>
        <Tag color={'grey'} size={'small'}>aaaaassaaa</Tag>
        <Tag>aaaaassaaa</Tag>
        <Tag color={'red'} size={'middle'}>aaaaassaaa</Tag>
        <Tag size={'large'} color={'grey'}>aaaaassaaa</Tag>
        <Tag size={'large'} color={'green'}>aaaaassaaa</Tag>
      </div>
    </main>
  );
}
