import {NextResponse } from 'next/server'
export default function middleware(req){
    const accessToken = req.cookies.get('accessJWT')
    let url = req.url
    if(!accessToken && url.includes('/admin') && (!url.includes('/admin/login'))){
        return NextResponse.redirect('https://foody-project.vercel.app/404')
        // https://foody-project.vercel.app/
    }
    else if(accessToken && (url.includes('/admin/login'))){
        return NextResponse.redirect('https://foody-project.vercel.app/404')
    }
    
}


