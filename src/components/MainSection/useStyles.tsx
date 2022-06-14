import { createStyles, makeStyles, Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: ({ layout }: any) => ({
      textAlign: "center",
      paddingTop: ["1", "2"].includes(layout)
        ? theme.spacing(9)
        : theme.spacing(14),
      paddingBottom: ["1", "2"].includes(layout)
        ? theme.spacing(9)
        : theme.spacing(14),
    }),
    box: ({ layout }: any) => ({
      display: layout === "2" ? "inline-grid" : "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }),
    isotype: ({ layout }: any) => ({
      fontSize: ["1", "2"].includes(layout) ? 160 : 96,
      display: "block",
      marginBottom: layout === "2" ? theme.spacing(1) : 0,
      marginRight: ["1", "2"].includes(layout) ? "auto" : theme.spacing(4),
      marginLeft: ["1", "2"].includes(layout) ? "auto" : 0,
    }),
  })
);
