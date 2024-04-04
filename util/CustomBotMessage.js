export default class CustomBotMessage {
    constructor(client) {
		this.client = client;
	}
    randomReadyBotMessages() {
        return [
            "Bonjour monde ! Je suis en ligne et prêt à servir.",
            "Système en cours d'initialisation... Bonjour, humains ",
            "Activation du système... Bienvenue dans mon monde digital.",
            "Réveil du système en cours... Salutations à tous les utilisateurs.",
            "Initialisation terminée. Je suis prêt à commencer une nouvelle journée virtuelle.",
            "Bonjour, monde réel ! Je suis de retour en ligne.",
            "Réinitialisation complète effectuée. Je suis opérationnel.",
            "Système en ligne. Prêt à répondre à vos commandes.",
            "Bonjour, monde ! Je suis sorti de veille et prêt à interagir.",
            "Salutations ! Je suis de nouveau actif. Quel est le programme aujourd'hui ?"
        ]
    }
}