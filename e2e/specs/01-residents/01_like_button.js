const Base = require('../../pageobjects/Home');
const homeSelectors = require('../../selectors/home');
const residentsSelectors = require('../../selectors/residents');

describe('Planet resident path', () => {
    before('setup', () => {
        Base.open();
        
    });

    it('should access to the alderaan resident cards', () => {

        $(homeSelectors.nabooResidentsButton).click();

        expect($(homeSelectors.residentsModal)).toBeDisplayed()
    });

    it('should click in the R2D2 and palpatine like button', () => {

        $(residentsSelectors.rtwodtwoLikeButton).click();
        $(residentsSelectors.palpatineLikeButton).click();

        expect($(residentsSelectors.rtwodtwoLikeButton)).toHaveElementClass('activeHeart');
        expect($(residentsSelectors.palpatineLikeButton)).toHaveElementClass('activeHeart');
    });

    it('should close the resident modal', () => {
        $(homeSelectors.residentsModalCloseButton).click();

        expect($(homeSelectors.residentsModal)).not.toBeDisplayed()
    });

    it('should confirm the residents like buttons are marked', () => {

        $(homeSelectors.nabooResidentsButton).click();

        expect($(residentsSelectors.rtwodtwoLikeButton)).toHaveElementClass('activeHeart');
        expect($(residentsSelectors.palpatineLikeButton)).toHaveElementClass('activeHeart');
    });
});
