import useStyles from './style';


const Sidebar = ({data, handleFilter, name}) => {
  const classes = useStyles();

  // permet de gardée une seule occurence de tag par collection.
  const nameOfTag = Array.from(new Set(data.map((i) => i.tags)));


  return (
    <div className={classes.sidebar}>
      <span className={classes.subtitle}>Toutes mes illustrations</span>
      <div className={classes.contentTag}>
        <TagButton name={name} data={data} handleFilter={handleFilter} />
        {
          nameOfTag.map((v, k) => (
            !!v.trim() ? <TagButton key={k} name={v} data={data} handleFilter={handleFilter} /> : null
          ))  
        }
        </div>
    </div>
  );
}


const TagButton = ({name, data, handleFilter}) => {
  const classes = useStyles();

    const getData = data.filter((image)=> {
      if(image.tags === name) {
        return data;
      }
    });

  return (
    <button
      onClick={() => handleFilter(getData, name)}
      className={classes.alink}>
      {name || "Tout"}
    </button>
  )
}


export default Sidebar;