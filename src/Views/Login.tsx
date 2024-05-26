import { Button, TouchableHighlight, TouchableHighlightBase, TouchableOpacity } from "react-native";
import { StyledInput, StyledText, StyledTouchable, StyledView } from "../Components/StyledComponents";
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation()
    return (
        <StyledView className="flex-1 justify-center items-center p-4">
            <StyledView className="mb-4">
                <StyledText className="text-2xl">
                    Inicio de sesion
                </StyledText>
            </StyledView>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <StyledView className="w-full">
                        <StyledInput
                            className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            placeholder="Email@email.com"
                            value={values.email}
                        />
                        <StyledInput
                            className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            secureTextEntry={true}
                            placeholder="Password"
                            value={values.password}
                        />
                        <StyledView>
                            <StyledTouchable
                                className="bg-blue-500 rounded px-4 py-2 items-center"
                                onPress={handleSubmit}
                            >
                                <StyledText className="text-white">Iniciar</StyledText>
                            </StyledTouchable>
                            <StyledTouchable
                                className="bg-blue-500 rounded px-4 py-2 items-center mt-2 w-[50%] self-center"
                                onPress={() => navigation.navigate('Register')}
                            >
                                <StyledText className="text-white">Crear cuenta</StyledText>
                            </StyledTouchable>
                        </StyledView>

                    </StyledView>
                )}
            </Formik>
        </StyledView>
    )
}