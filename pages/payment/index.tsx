import { useRouter } from "next/router";
import Payment from "../../components/Payment";
import Head from "next/head";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import { Section } from "../../components/Bulma";
import withApollo from "../../lib/apollo";
import {
  useGetInvoiceQuery,
  GetInvoiceQueryResult,
  InvoicePublic,
} from "../../lib/graphql";

const PaymentContent: React.FC<GetInvoiceQueryResult & { amount?: number }> = ({
  loading,
  error,
  data,
  amount,
}) => {
  if (loading) {
    return (
      <div className="message">
        <div className="message-body">
          Loading your payment details; please wait.
        </div>
      </div>
    );
  }

  if (error) {
    console.error(error);
    return (
      <div className="message is-danger">
        <div className="message-body">
          An error occurred loading the payment details. Please contact your
          Take Off Go representative.
        </div>
      </div>
    );
  }

  return (
    <Payment
      model={{
        invoice: data?.invoice as InvoicePublic,
        amount,
      }}
    />
  );
};

const PaymentPage: React.FC = () => {
  const router = useRouter();
  const { id, amount } = router.query;

  const query = useGetInvoiceQuery({
    variables: { id },
  });

  return (
    <>
      <Head>
        <title>Payment - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <Section container>
        <Header />
        <div className="columns is-centered">
          <div className="column is-4">
            <PaymentContent {...query} amount={parseFloat(amount as string)} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default withApollo({ ssr: false })(PaymentPage);
