import { corelib } from '../../../src/lib';
import {
  Cartesian,
  Polar,
  Transpose,
  Parallel,
  Fisheye,
  Helix,
  Theta,
  Radial,
  Radar,
} from '../../../src/coordinate';
import { Constant, Field, Transform, Column } from '../../../src/encode';
import {
  Interval,
  Rect,
  Line,
  Point as PointGeometry,
  Text as TextGeometry,
  Cell,
  Area as AreaGeometry,
  Image as ImageGeometry,
  Polygon as PolygonGeometry,
  Box as BoxGeometry,
  Vector as VectorGeometry,
  Link as LinkGeometry,
  LineX,
  LineY,
  Range,
  RangeX,
  RangeY,
  Connector,
  Path,
  Shape,
  Density,
  Heatmap,
} from '../../../src/mark';
import { Category10, Category20 } from '../../../src/palette';
import {
  Linear,
  Ordinal,
  Band,
  Identity,
  Point,
  Time,
  Log,
  Pow,
  Threshold,
  Quantile,
  Quantize,
  Sqrt,
  Sequential,
  Constant as ConstantScale,
} from '../../../src/scale';
import { Classic, ClassicDark, Academy } from '../../../src/theme';
import {
  AxisX,
  AxisY,
  AxisArc,
  AxisLinear,
  AxisRadar,
  LegendCategory,
  LegendContinuous,
  LegendContinuousBlock,
  LegendContinuousBlockSize,
  LegendContinuousSize,
  SliderX,
  SliderY,
  ScrollbarX,
  ScrollbarY,
  TitleComponent,
  Legends,
} from '../../../src/component';
import {
  ScaleInX,
  ScaleOutX,
  ScaleInY,
  ScaleOutY,
  FadeIn,
  FadeOut,
  Morphing,
  WaveIn,
  ZoomIn,
  ZoomOut,
  PathIn,
  GrowInX,
  GrowInY,
} from '../../../src/animation';
import {
  ElementHighlight,
  ElementHighlightByColor,
  ElementHighlightByX,
  ElementSelect,
  ElementSelectByColor,
  ElementSelectByX,
  Fisheye as ChartFisheye,
  ChartIndex,
  Tooltip,
  LegendFilter,
  BrushXHighlight,
  BrushYHighlight,
  BrushHighlight,
  BrushAxisHighlight,
  BrushFilter,
  BrushYFilter,
  BrushXFilter,
  SliderFilter,
  ScrollbarFilter,
  LegendHighlight,
  Poptip,
  Event,
} from '../../../src/interaction';
import {
  SpaceLayer,
  SpaceFlex,
  RepeatMatrix,
  View,
  FacetCircle,
  FacetRect,
  TimingKeyframe,
  Mark,
} from '../../../src/composition';
import {
  StackY,
  DodgeX,
  StackEnter,
  NormalizeY,
  Jitter,
  JitterX,
  SymmetryY,
  DiffY,
  Select,
  SelectX,
  SelectY,
  GroupX,
  SortX,
  FlexX,
  SortColor,
  SortY,
  Group,
  GroupY,
  GroupColor,
  Pack,
  Bin,
  BinX,
  Sample,
  Filter as FilterTransform,
} from '../../../src/transform';
import {
  Fetch,
  SortBy,
  Sort,
  Filter,
  Map,
  Pick,
  Rename,
  Fold,
  Slice,
  Inline,
  Custom,
  Join,
  KDE,
  Log as DataLog,
} from '../../../src/data';
import {
  OverflowHide,
  ContrastReverse,
  OverlapHide,
  OverlapDodgeY,
} from '../../../src/label-transform';
import { LabelShape } from '../../../src/shape';

describe('corelib', () => {
  it('corelib() should returns expected basic marks and components.', () => {
    expect(corelib()).toEqual({
      'data.fetch': Fetch,
      'data.inline': Inline,
      'data.sortBy': SortBy,
      'data.sort': Sort,
      'data.filter': Filter,
      'data.pick': Pick,
      'data.rename': Rename,
      'data.fold': Fold,
      'data.slice': Slice,
      'data.custom': Custom,
      'data.map': Map,
      'data.join': Join,
      'data.kde': KDE,
      'data.log': DataLog,
      'transform.stackY': StackY,
      'transform.binX': BinX,
      'transform.bin': Bin,
      'transform.dodgeX': DodgeX,
      'transform.jitter': Jitter,
      'transform.jitterX': JitterX,
      'transform.symmetryY': SymmetryY,
      'transform.diffY': DiffY,
      'transform.stackEnter': StackEnter,
      'transform.normalizeY': NormalizeY,
      'transform.select': Select,
      'transform.selectX': SelectX,
      'transform.selectY': SelectY,
      'transform.groupX': GroupX,
      'transform.groupY': GroupY,
      'transform.groupColor': GroupColor,
      'transform.group': Group,
      'transform.sortX': SortX,
      'transform.sortY': SortY,
      'transform.sortColor': SortColor,
      'transform.flexX': FlexX,
      'transform.pack': Pack,
      'transform.sample': Sample,
      'transform.filter': FilterTransform,
      'coordinate.cartesian': Cartesian,
      'coordinate.polar': Polar,
      'coordinate.helix': Helix,
      'coordinate.transpose': Transpose,
      'coordinate.theta': Theta,
      'coordinate.parallel': Parallel,
      'coordinate.radar': Radar,
      'coordinate.fisheye': Fisheye,
      'coordinate.radial': Radial,
      'encode.constant': Constant,
      'encode.field': Field,
      'encode.transform': Transform,
      'encode.column': Column,
      'mark.interval': Interval,
      'mark.rect': Rect,
      'mark.line': Line,
      'mark.point': PointGeometry,
      'mark.text': TextGeometry,
      'mark.cell': Cell,
      'mark.area': AreaGeometry,
      'mark.link': LinkGeometry,
      'mark.image': ImageGeometry,
      'mark.polygon': PolygonGeometry,
      'mark.box': BoxGeometry,
      'mark.vector': VectorGeometry,
      'mark.lineX': LineX,
      'mark.lineY': LineY,
      'mark.connector': Connector,
      'mark.range': Range,
      'mark.rangeX': RangeX,
      'mark.rangeY': RangeY,
      'mark.path': Path,
      'mark.shape': Shape,
      'mark.density': Density,
      'mark.heatmap': Heatmap,
      'shape.label.label': LabelShape,
      'palette.category10': Category10,
      'palette.category20': Category20,
      'scale.linear': Linear,
      'scale.ordinal': Ordinal,
      'scale.band': Band,
      'scale.identity': Identity,
      'scale.point': Point,
      'scale.time': Time,
      'scale.log': Log,
      'scale.pow': Pow,
      'scale.sqrt': Sqrt,
      'scale.threshold': Threshold,
      'scale.quantile': Quantile,
      'scale.quantize': Quantize,
      'scale.sequential': Sequential,
      'scale.constant': ConstantScale,
      'theme.classic': Classic,
      'theme.classicDark': ClassicDark,
      'theme.academy': Academy,
      'component.axisX': AxisX,
      'component.axisY': AxisY,
      'component.axisArc': AxisArc,
      'component.axisLinear': AxisLinear,
      'component.axisRadar': AxisRadar,
      'component.legendCategory': LegendCategory,
      'component.legendContinuous': LegendContinuous,
      'component.legendContinuousBlock': LegendContinuousBlock,
      'component.legendContinuousBlockSize': LegendContinuousBlockSize,
      'component.legendContinuousSize': LegendContinuousSize,
      'component.legends': Legends,
      'component.title': TitleComponent,
      'component.sliderX': SliderX,
      'component.sliderY': SliderY,
      'component.scrollbarX': ScrollbarX,
      'component.scrollbarY': ScrollbarY,
      'animation.scaleInX': ScaleInX,
      'animation.scaleOutX': ScaleOutX,
      'animation.scaleInY': ScaleInY,
      'animation.scaleOutY': ScaleOutY,
      'animation.waveIn': WaveIn,
      'animation.fadeIn': FadeIn,
      'animation.fadeOut': FadeOut,
      'animation.zoomIn': ZoomIn,
      'animation.zoomOut': ZoomOut,
      'animation.pathIn': PathIn,
      'animation.morphing': Morphing,
      'animation.growInX': GrowInX,
      'animation.growInY': GrowInY,
      'interaction.elementHighlight': ElementHighlight,
      'interaction.elementHighlightByX': ElementHighlightByX,
      'interaction.elementHighlightByColor': ElementHighlightByColor,
      'interaction.elementSelect': ElementSelect,
      'interaction.elementSelectByX': ElementSelectByX,
      'interaction.elementSelectByColor': ElementSelectByColor,
      'interaction.fisheye': ChartFisheye,
      'interaction.chartIndex': ChartIndex,
      'interaction.tooltip': Tooltip,
      'interaction.legendFilter': LegendFilter,
      'interaction.legendHighlight': LegendHighlight,
      'interaction.brushXHighlight': BrushXHighlight,
      'interaction.brushYHighlight': BrushYHighlight,
      'interaction.brushHighlight': BrushHighlight,
      'interaction.brushAxisHighlight': BrushAxisHighlight,
      'interaction.brushYFilter': BrushYFilter,
      'interaction.brushXFilter': BrushXFilter,
      'interaction.brushFilter': BrushFilter,
      'interaction.sliderFilter': SliderFilter,
      'interaction.scrollbarFilter': ScrollbarFilter,
      'interaction.poptip': Poptip,
      'interaction.event': Event,
      'composition.spaceLayer': SpaceLayer,
      'composition.spaceFlex': SpaceFlex,
      'composition.mark': Mark,
      'composition.view': View,
      'composition.facetRect': FacetRect,
      'composition.repeatMatrix': RepeatMatrix,
      'composition.facetCircle': FacetCircle,
      'composition.timingKeyframe': TimingKeyframe,
      'labelTransform.overlapHide': OverlapHide,
      'labelTransform.overlapDodgeY': OverlapDodgeY,
      'labelTransform.overflowHide': OverflowHide,
      'labelTransform.contrastReverse': ContrastReverse,
    });
  });
});
