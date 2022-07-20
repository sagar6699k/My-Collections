type PersonListProp = {
    userList:{
        f_name: string;
        l_name: string;
    }[]
}

export const PersonList = (props:PersonListProp) => {
    const {userList} = props

  return (
    <div>
        {
            userList.map((ele)=>(
               <p>{ele.f_name} {ele.l_name} </p>
            ))
        }
    </div>
  )
}
