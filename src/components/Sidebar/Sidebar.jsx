import {useState, useEffect, useContext} from 'react';
import useStyles from './style';




const Sidebar = props => {
  const classes = useStyles();
  const [tag, setTag] = useState("Tout");
  const [filterImg, setFilterImg] = useState([]);

  useEffect(() => {
    if(tag === "tout") {
      setFilterImg(props.data);
    } else {
      setFilterImg(props.data.filter(image => image.tags === tag))
    }
  }, [tag]);
  // permet de gardée une seule occurence de tag par collection.
  const nameOfTag = Array.from(new Set(props.data.map((i) => i.tags)));

  console.log(tag)

  return (
    <div className={classes.sidebar}>
      <span className={classes.subtitle}>Mes oeuvres par :</span>
      <TagButton onClick={() => setTag(name)}/>
      {
        nameOfTag.map((v, k) => (
          !!v.trim() ? <TagButton onClick={() => setTag(name)} key={k} name={v} /> : null
          ))

        }
    </div>
  );
}


const TagButton = ({name}) => {
  const classes = useStyles();


  return (
        <button 
          
          className={classes.alink}>
          {name || "Tout"}
        </button>
  )
}


export default Sidebar;