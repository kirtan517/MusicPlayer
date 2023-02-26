import { Container, Typography, Grid } from "@material-ui/core";

const NameUiComponent = ({ typeName,typeVariant,typeFontWeight, name,nameFontWeight,top,nameVariant }: any) => {
  return (
    <>
      <Typography
        variant= {typeVariant}
        style={{ position: "relative", top: top , zIndex: "1rem", fontWeight : typeFontWeight  }}
      >
        {typeName}
      </Typography>
      <Typography
        variant= {nameVariant}
        style={{ zIndex: "-1rem", fontWeight: nameFontWeight }}
      >
        {name}
      </Typography>
    </>
  );
};


export default NameUiComponent;
