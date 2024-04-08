export type BackendAuthResponse = {
  refresh ?: string,
  access ?: string,
}

export type UserDetail = {
    email : string,
    firstName : string, 
    lastName : string,
    hasBike? : boolean,
    isStaff? : boolean,
    isActive? : boolean
  }


export type NoticeInfo = {
  show : boolean, 
  type : 'info' | 'warning' | 'success' | 'error' | null,
  content : string | null,
  showTime ? : number
}