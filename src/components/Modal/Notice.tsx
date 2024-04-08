import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import { NoticeInfo } from '@/types'

type NoticeProps = NoticeInfo & {
    showHandler : (info : NoticeInfo) => void,
    showTime ? : number
}


export const Notice = ({ content, type, showHandler, showTime = 3} : NoticeProps) => {

    const [ active, setActive ] = useState<boolean>( true )
    const mileSec : number = showTime * 1000
    useEffect( ()=> {

        setTimeout( ()=> {
            setActive( false )
            showHandler( {show : false, content : null, type : null} )
        }, mileSec )

    }, [])

    let noticeType = '' 

    switch ( type ){
        case 'info':
            noticeType = 'info_notice'
            break
        case 'warning':
            noticeType = 'warning_notice'
            break
        case 'success':
            noticeType = 'success_notice'
            break
        case 'error':
            noticeType = 'error_notice'
            break      
    }

    return(
        active &&
        ReactDOM.createPortal(
        <div 
            className = { `notice_container ${ noticeType }` } >
            <p>{ content }</p>
        </div>
        , window.document.getElementById( 'notice' ) as HTMLElement)
    )
}