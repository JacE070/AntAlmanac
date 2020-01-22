import React, { Fragment, PureComponent } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import CoursePaneButtonRow from './CoursePaneButtonRow';
import CourseRenderPane from '../CoursePane/CourseRenderPane';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    container: {
        height: '100%',
    },
};

class RightPane extends PureComponent {
    state = {
        showSearch: true,
    };

    searchWebSoc = () => {
        this.setState({ showSearch: false });
    };

    handleDismissSearchResults = () => {
        this.setState({ showSearch: true });
    };

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <CoursePaneButtonRow
                    show={!this.state.showSearch}
                    onDismissSearchResults={this.handleDismissSearchResults}
                />
                {this.state.showSearch ? (
                    <SearchForm searchWebSoc={this.searchWebSoc} />
                ) : (
                    <CourseRenderPane />
                )}
            </Fragment>
        );
    }
}

export default withStyles(styles)(RightPane);
