type personProps = {
  name: {
    f_name: string;
    l_name: string;
  };
};

export const Person = (props: personProps) => {


  return <div>Hii,,{props.name.f_name} {props.name.l_name}.</div>;
};
