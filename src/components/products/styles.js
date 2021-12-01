import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    root : {
        maxWidth: "100%",
        // justifyContent: "center"
        boxShadow:"none",
      
    },
    media: {
        height: 200,

        paddingTop: '56.25%', // 16:9
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display:"flex",
        justifyContent: "space-between"
    }
}))