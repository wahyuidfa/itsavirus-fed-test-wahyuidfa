import { makeStyles } from "@mui/styles";



export default makeStyles(() => ({
    appBar :{
       boxShadow:"none",
    },
    toolBar :{
        justifyContent: "space-between",
        display: "flex",
        boxShadow:"none"
    },
    title: {
        width: "5%"
    },
    image: {
        width: "52.84px"
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        listStyleType: "none",
        gap: "40px",
        fontSize: "14px",
        fontWeight:600,
        fontFamily: "poppins",
        justifyContent: "center",
      
    },
    listNavbar: {
        width:"42%",
        display: "flex",
    },
    listNav: {
        borderBottom: "none",
        '&:hover':{
            borderBottom: "solid"
        },
        '&:focus':{
            borderBottom: "solid"
        }

    }
}))