import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

// material-ui
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import Logo from 'components/logo';
import useAuth from 'hooks/useAuth';
import AuthSocButton from 'sections/auth/AuthSocButton';
import AuthDivider from 'sections/auth/AuthDivider';
import AuthWrapper2 from 'sections/auth/AuthWrapper2';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';

// assets
import imgFacebook from 'assets/images/auth/facebook.svg';
import imgTwitter from 'assets/images/auth/twitter.svg';
import imgGoogle from 'assets/images/auth/google.svg';

// ================================|| LOGIN ||================================ //

export default function Login2() {
  const { isLoggedIn } = useAuth();

  return (
    <AuthWrapper2>
      <Grid container spacing={3}>
        <Grid sx={{ textAlign: 'center' }} size={12}>
          <Logo />
        </Grid>
        <Grid size={12}>
          <Grid container spacing={1}>
            <Grid size={12}>
              <AuthSocButton>
                <CardMedia component="img" src={imgFacebook} alt="Facebook" sx={{ my: 0, mx: 1.25, width: 'auto' }} /> <FormattedMessage id="sign_in_with_facebook" defaultMessage="Sign In with Facebook" />
              </AuthSocButton>
            </Grid>
            <Grid size={12}>
              <AuthSocButton>
                <CardMedia component="img" src={imgTwitter} alt="Twitter" sx={{ my: 0, mx: 1.25, width: 'auto' }} /> <FormattedMessage id="sign_in_with_twitter" defaultMessage="Sign In with Twitter" />
              </AuthSocButton>
            </Grid>
            <Grid size={12}>
              <AuthSocButton>
                <CardMedia component="img" src={imgGoogle} alt="Google" sx={{ my: 0, mx: 1.25, width: 'auto' }} /> <FormattedMessage id="sign_in_with_google" defaultMessage="Sign In with Google" />
              </AuthSocButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <AuthDivider>
            <Typography variant="body1"><FormattedMessage id="or" defaultMessage="OR" /></Typography>
          </AuthDivider>
        </Grid>
        <Grid size={12}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'baseline', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3"><FormattedMessage id="login" defaultMessage="Login" /></Typography>
            <Typography
              component={Link}
              to={isLoggedIn ? '/auth/register2' : '/register2'}
              variant="body1"
              sx={{ textDecoration: 'none' }}
              color="primary"
            >
              <FormattedMessage id="dont_have_account" defaultMessage="Don't have an account?" />
            </Typography>
          </Stack>
        </Grid>
        <Grid size={12}>
          <AuthLogin forgot="/auth/forgot-password2" />
        </Grid>
      </Grid>
    </AuthWrapper2>
  );
}
