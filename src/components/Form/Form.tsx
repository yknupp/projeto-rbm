import * as Styled from "./Form.style";
import React from "react";

export default function ExampleAtom() {
  return (
    <Styled.ComponentsPagelogin>
        <Styled.ComponentsH1>Entrar na minha conta</Styled.ComponentsH1>
        <Styled.ComponentsH2>Acesse sua conta abaixo</Styled.ComponentsH2>
        <Styled.ComponentsEmail type="text" placeholder="Diigite seu email"></Styled.ComponentsEmail>
        <Styled.ComponentsPassword type="text"  placeholder="Digite sua senha"></Styled.ComponentsPassword>
        <Styled.ComponentsSaveLogin type="checkbox" name="Salvar login"></Styled.ComponentsSaveLogin>
        <Styled.ComponentsLabelSaveLogin>Salvar login</Styled.ComponentsLabelSaveLogin>
        <Styled.ComponentsEsqueciSenha href="" >Esqueci a senha</Styled.ComponentsEsqueciSenha>
        <Styled.ComponentsLogin>Entrar</Styled.ComponentsLogin>
        <Styled.ComponentsFristLogin href="" >Primeiro Acesso? Ative sua conta.</Styled.ComponentsFristLogin>
    </Styled.ComponentsPagelogin>
  );
}
