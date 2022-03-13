<script>
  import AboutMe from '../components/AboutMe.svelte';
  import Alert from '../components/Alert.svelte';
  import Header from '../components/Header.svelte';
  import Layout from '../components/Layout.svelte';
  import SocialButtons from '../components/SocialButtons.svelte';
</script>

<Layout>
  <Header />
  <AboutMe />
  <SocialButtons />
  <Alert>
    <p>
      <strong>Recruiters:</strong> I will not respond to unsolicited emails, voicemails, or texts, unless I have personally
      given you my contact details. Please send any opportunities via LinkedIn and I'll be in touch if interested.
    </p>
  </Alert>
</Layout>
