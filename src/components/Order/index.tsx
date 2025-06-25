import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { IMaskInput } from 'react-imask'
import type { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { clear, close } from '../../store/reducers/cart'
import { closeOrder, openOrder } from '../../store/reducers/order'
import { closePayment, openPayment } from '../../store/reducers/payment'
import { closeDelivery } from '../../store/reducers/delivery'
import Button from '../Button'
import * as S from './styles'
import { ParseToBrl, getTotalPrice } from '../../utils'

const Order = () => {
  const { deliveryOpen } = useSelector((state: RootReducer) => state.delivery)
  const { orderOpen } = useSelector((state: RootReducer) => state.order)
  const { paymentOpen } = useSelector((state: RootReducer) => state.payment)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasErrors = isTouched && isInvalid
    return hasErrors
  }

  const deliveryClose = () => {
    dispatch(closeDelivery())
  }

  const paymentClose = () => {
    dispatch(closePayment())
  }

  const abrirPayment = () => {
    dispatch(openPayment())
  }

  const orderProgress = () => {
    if (form.dirty) {
      const fields = [
        'nome',
        'endereco',
        'cidade',
        'cep',
        'numero',
        'cardName',
        'cardNumber',
        'cvv',
        'month',
        'year'
      ]
      fields.forEach((field) => {
        if (form.errors[field as keyof typeof form.errors]) {
          alert(`${field} - ${form.errors[field as keyof typeof form.errors]}`)
        }
      })
    }

    if (form.isValid) {
      dispatch(openOrder())
    } else if (!form.dirty) {
      alert('Campos em branco')
    }
  }

  const orderClose = () => {
    dispatch(closeOrder())
    dispatch(closePayment())
    dispatch(closeDelivery())
    dispatch(close())
    form.resetForm()
    dispatch(clear())
    navigate('/')
  }

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string().min(4).required(),
      endereco: Yup.string().min(5).required(),
      cidade: Yup.string().min(2).required(),
      cep: Yup.string().min(8).required(),
      numero: Yup.string().min(1).required(),
      cardName: Yup.string().min(5).required(),
      cardNumber: Yup.string().min(16).required(),
      cvv: Yup.string().min(3).required(),
      month: Yup.string().min(2).required(),
      year: Yup.string().min(2).required()
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.nome,
          address: {
            description: values.endereco,
            zipCode: values.cep,
            city: values.cidade,
            numberAdress: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      })
    }
  })

  return (
    <>
      {orderOpen && data ? (
        <S.OrderContainer>
          <S.Sidebar>
            <S.CardData>
              <h2>Pedido realizado - {data.orderId}</h2>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Lembre-se de higienizar as mãos ao receber. Bom apetite!
              </p>
              <S.CardButton>
                <Button type="product-link" title="Concluir" onClick={orderClose}>
                  Concluir
                </Button>
              </S.CardButton>
            </S.CardData>
          </S.Sidebar>
        </S.OrderContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <S.DeliveryPaymentContainer>
            <S.DeliveryContainer className={deliveryOpen ? 'delivery-open' : ''}>
              <S.Sidebar>
                <S.CardData>
                  <h2>Entrega</h2>
                  <label htmlFor="nome">Quem irá receber</label>
                  <input
                    id="nome"
                    value={form.values.nome}
                    onChange={form.handleChange}
                    className={checkInputError('nome') ? 'error' : ''}
                  />
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    id="endereco"
                    value={form.values.endereco}
                    onChange={form.handleChange}
                    className={checkInputError('endereco') ? 'error' : ''}
                  />
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    id="cidade"
                    value={form.values.cidade}
                    onChange={form.handleChange}
                    className={checkInputError('cidade') ? 'error' : ''}
                  />
                </S.CardData>
                <S.CardDataAdress>
                  <S.CardData>
                    <label htmlFor="cep">CEP</label>
                    <IMaskInput
                      id="cep"
                      mask="00000-000"
                      value={form.values.cep}
                      onAccept={(value) => form.setFieldValue('cep', value)}
                      className={checkInputError('cep') ? 'error' : ''}
                    />
                  </S.CardData>
                  <S.CardData>
                    <label htmlFor="numero">Número</label>
                    <input
                      id="numero"
                      value={form.values.numero}
                      onChange={form.handleChange}
                      className={checkInputError('numero') ? 'error' : ''}
                    />
                  </S.CardData>
                </S.CardDataAdress>
                <S.CardData>
                  <label htmlFor="complemento">Complemento (Opcional)</label>
                  <input
                    id="complemento"
                    value={form.values.complemento}
                    onChange={form.handleChange}
                  />
                </S.CardData>
                <S.CardButton>
                  <Button onClick={abrirPayment} type="product-link" title="Pagamento">
                    Continuar com o pagamento
                  </Button>
                  <Button onClick={deliveryClose} type="product-link" title="Voltar">
                    Voltar ao carrinho
                  </Button>
                </S.CardButton>
              </S.Sidebar>
            </S.DeliveryContainer>

            <S.PaymentContainer className={paymentOpen ? 'payment-open' : ''}>
              <S.Sidebar>
                <S.CardData>
                  <h2>
                    Pagamento - valor a pagar{' '}
                    <span>{ParseToBrl(getTotalPrice(items))}</span>
                  </h2>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    value={form.values.cardName.toUpperCase()}
                    onChange={form.handleChange}
                    className={checkInputError('cardName') ? 'error' : ''}
                  />
                </S.CardData>
                <S.CardDataAdress>
                  <S.CardData>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <IMaskInput
                      id="cardNumber"
                      mask="0000 0000 0000 0000"
                      value={form.values.cardNumber}
                      onAccept={(value) => form.setFieldValue('cardNumber', value)}
                      className={checkInputError('cardNumber') ? 'error' : ''}
                    />
                  </S.CardData>
                  <S.CardData>
                    <label htmlFor="cvv">CVV</label>
                    <IMaskInput
                      id="cvv"
                      mask="000"
                      value={form.values.cvv}
                      onAccept={(value) => form.setFieldValue('cvv', value)}
                      className={checkInputError('cvv') ? 'error' : ''}
                    />
                  </S.CardData>
                </S.CardDataAdress>
                <S.CardDataAdress>
                  <S.CardData>
                    <label htmlFor="month">Mês de vencimento</label>
                    <IMaskInput
                      id="month"
                      mask="00"
                      value={form.values.month}
                      onAccept={(value) => form.setFieldValue('month', value)}
                      className={checkInputError('month') ? 'error' : ''}
                    />
                  </S.CardData>
                  <S.CardData>
                    <label htmlFor="year">Ano de vencimento</label>
                    <IMaskInput
                      id="year"
                      mask="00"
                      value={form.values.year}
                      onAccept={(value) => form.setFieldValue('year', value)}
                      className={checkInputError('year') ? 'error' : ''}
                    />
                  </S.CardData>
                </S.CardDataAdress>
                <S.CardButton>
                  <Button type="submit" title="Finalizar" onClick={orderProgress}>
                    Finalizar pagamento
                  </Button>
                  <Button
                    type="product-link"
                    title="Voltar"
                    onClick={paymentClose}
                  >
                    Voltar para a edição de endereço
                  </Button>
                </S.CardButton>
              </S.Sidebar>
            </S.PaymentContainer>
          </S.DeliveryPaymentContainer>
        </form>
      )}
    </>
  )
}

export default Order
