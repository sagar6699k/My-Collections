type GreetProps = {
    name: string,
    count: number,
    isLogin: boolean
}


export const Greet = (props: GreetProps) => {
  const { name, count, isLogin } = props;

  if (isLogin) {
    return(
        <div>
        <strong>Welcome {name}! </strong>
        <span> You have {count} unread messages.</span>
      </div>
    )
  }

  return (
    <div>
      <strong>Welcome {name}! </strong>
      <span> Please Login to see your inbox</span>
    </div>
  );
};
