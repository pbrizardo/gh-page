import { makeStyles } from "@material-ui/core";

const useCommonStyles = makeStyles({
  titleLight: {
    fontWeight: 'lighter',
    display: 'inline-block',
    marginRight: '16px',
    color: 'rgba(255,255,255,0.8)',
  },
  title: {
    display: 'inline-block',
    color: 'rgba(255,255,255,0.8)',
  },
  titleContainer: {
    textAlign: 'center',
    paddingBottom: '32px',
  },
  container: {
    padding: '128px 0 128px 0'
  }
});

export default useCommonStyles;