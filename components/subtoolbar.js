import {useRouter} from 'next/router'
import styles from '../styles/Toolbar.module.css'

export const Subtoolbar = () => {
    const router = useRouter()

    return (
        <div className={styles.main}>
            <div onClick = {() => router.push('/feed/general/1')}>General</div>
            <div onClick = {() => router.push('/feed/sports/1')}>Sports</div>
            <div onClick = {() => router.push('/feed/entertainment/1')}>Entertainment</div>
            <div onClick = {() => router.push('/feed/business/1')}>Business</div>
            <div onClick = {() => router.push('/feed/science/1')}>Science</div>
            <div onClick = {() => router.push('/feed/technology/1')}>Technology</div>
        </div>
    )
}