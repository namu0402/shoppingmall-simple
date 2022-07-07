import App from 'next/app'

function app({ Component, pageProps }: {
	Component: any,
	pageProps: any,
}) {
	return (
		<>
			<Component {...pageProps} />

			<style>{`
				html, body {
					padding: 0;
					margin: 0;
				}
			`}</style>
		</>		
	);
};
   
app.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  
  return { ...appProps }
}

export default app;
